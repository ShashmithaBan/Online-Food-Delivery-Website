package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Config.JwtProvider;
import com.example.Online.Food.Ordering.System.Model.Cart;
import com.example.Online.Food.Ordering.System.Model.USER_ROLE;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Repo.CartRepository;
import com.example.Online.Food.Ordering.System.Repo.UserRepository;
import com.example.Online.Food.Ordering.System.Request.LoginRequest;
import com.example.Online.Food.Ordering.System.Response.AuthResponse;
import com.example.Online.Food.Ordering.System.Service.CustomerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    private CartRepository cartRepository;

    //In this im going to create the User handler on the registration
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {

        User isEmailExist = userRepository.findByEmail(user.getEmail());//firstly we should check whether the provided email is already registered with the system

        if(isEmailExist != null){
                throw new Exception("The Provided email is already exists . Try with another account.");

            }
            //Creating a new user
        User createUser = new User();
            createUser.setEmail(user.getEmail());
            createUser.setFullName(user.getFullName());
            createUser.setRole(user.getRole());
            createUser.setPassword(passwordEncoder.encode(user.getPassword()));

            //Saving in the database
            User savedUser = userRepository.save(createUser);

            //Creating cart for this new user while the registration
        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail() , user.getPassword());//this for to generate the token
        SecurityContextHolder.getContext().setAuthentication(authentication);

        //here, generating the token
        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Registration successful");
        authResponse.setRole(savedUser.getRole());

        return new ResponseEntity<>(authResponse , HttpStatus.OK);

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest req){
        String userName = req.getEmail();
        String password = req.getPassword();

        Authentication authentication = authenticate(userName , password);
        Collection<? extends GrantedAuthority>authorities = authentication.getAuthorities();

        //this is means if the authority is empty the null is assign to the role
        //if it's not empty the authority will assign to the role
        String role = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Login success");
        authResponse.setRole(USER_ROLE.valueOf(role));

        return new ResponseEntity<>(authResponse , HttpStatus.OK);
    }
    public Authentication authenticate(String userName , String password){

        UserDetails userDetails = customerUserDetailsService.loadUserByUsername(userName);

        if (userDetails==null){
            throw new BadCredentialsException("Invalid Username...");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails , null , userDetails.getAuthorities());

    }



}


