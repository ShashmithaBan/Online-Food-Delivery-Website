import React from 'react'
import { CartItem } from './CartItem'
import { Box, Button, Card, Grid, Modal, TextField  } from '@mui/material'
import '../Cart/Cart.css'
import { AddressCard } from './AddressCard'
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import { ErrorMessage, Field, Form, Formik } from 'formik'
//  

export const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0, 0, 0, 0.5)',
    border:'1px solid #40c165 ',
    boxShadow: 24,
    p: 4,
    color:'white'
    
  };
  const initialValues = {
    streetAddress:'',
    state:'',
    pincode:'',
    city:''
  }
  // const validationSchema = Yup.object.shape({
  //   streetAddress:Yup.string().required("Street address is required"),
  //   state:Yup.string().required("State is required"),
  //   pincode:Yup.required("Pin code is required"),
  //   city:Yup.string().required("City  is required")
  // })
const items =[1,1]
const address = [1,1,1,1]
export const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{

    };
    const handleOpenAddressModal=()=>setOpen(true);
    const [open, setOpen] = React.useState(false); 
  const handleClose = () => setOpen(false);
  const handleSubmit = (value)=>{
      console.log("form value" , value)
  };
  return (
    <>
        <main className='lg:flex justify-between gap-2 p-2'>
             <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10 lg:px-5 shadow-lg">
             {items.map((item)=>
             <CartItem/>
            )}
            <hr className="border-gray-500 w-full"/>
            <div className="billdetails px-3 text-sm font-mono">
                <p className="font-extralight py-5">
                    Billing Details
                </p>
                <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                        <p className="">Item Total</p>
                        <p className="">LKR 5000</p>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <p className="">Delivery Fee</p>
                        <p className="">LKR 500</p>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <p className="">Service Fee</p>
                        <p className="">LKR 500</p>
                    </div>
                </div>
                
            </div>
            <hr className="border-gray-500 w-full"/>
            <div className="flex justify-between text-gray-700 font-bold font-mono px-3">
                        <p className="">Total Fee</p>
                        <p className="">LKR 6000</p>
                    </div>
                    <hr className="border-gray-700 w-full"/>
                          
             </section>
             
             <section className='lg:w-[70%] shadow-lg flex justify-center lg:pb-0 pb-10 px-5'>
                <div className="">
                <h1 className="text-center font-semibold text-2xl py-10">
                        Choose Your Delivery Address
                </h1>
                <div className="flex flex-wrap jestify-center gap-4 items-center">
   {address.map((i)=>
                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={i} showButton={i}/>
)}
<Card className=' gap-5 w-64 p-5' >
        <div className="icon  flex justify-center ">
        <AddLocationAltRoundedIcon color='primary'/>
        </div>
        
         <div className="p-2 space-y-3 ">
         <h2 className='flex justify-center items-center text-gray-600 font-semibold'>Add New Address</h2>
        
        <Button variant = "contained" fullWidth  onClick={handleOpenAddressModal}>
            Add
         </Button>
        </div>

    </Card>
                </div>
                    </div>
             </section>
        </main>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}>
            <Form >
               <Grid container>
              <Grid item xs={12} style={{  padding:'12px'}}>
                <Field color='primary'
                as = {TextField}
                name = "streetAddress"
                label = "Street Address"
                fullWidth
                variant = "outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText = {
                //   <ErrorMessage>
                //     {(msg)=><span className='t ext'> </span>}
                //   </ErrorMessage>
                // }
                />
              </Grid>
              <Grid item xs={12} style={{  padding:'12px'}}>
                <Field color='primary'
                as = {TextField}
                name = "state"
                label = "State"
                fullWidth
                variant = "outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText = {
                //   <ErrorMessage>
                //     {(msg)=><span className='t ext'> </span>}
                //   </ErrorMessage>
                // }
                />
              </Grid>
              <Grid item xs={6} style={{  padding:'12px'}}>
                <Field color='primary'
                as = {TextField}
                name = "picode"
                label = "Pincode"
                fullWidth
                variant = "outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText = {
                //   <ErrorMessage>
                //     {(msg)=><span className='t ext'> </span>}
                //   </ErrorMessage>
                // }
                />
              </Grid>
              <Grid item xs={6} style={{  padding:'12px'}}>
                <Field color='primary'
                as = {TextField}
                name = "city"
                label = "City"
                fullWidth
                variant = "outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText = {
                //   <ErrorMessage>
                //     {(msg)=><span className='t ext'> </span>}
                //   </ErrorMessage>
                // }
                />
              </Grid>
              <Grid item xs={12} style={{ padding:'12px'}}>
                <Button fullWidth type="submit" variant ="contained" color="primary" >
                  Deliver here!!
                </Button>
              </Grid>
               </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  )
}
