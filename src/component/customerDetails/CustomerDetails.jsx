import React from 'react'
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import '../customerDetails/CustomerDetails.scss'
import {
    editCustomerDetailsApi, getTheCard,
} from '../../services/userSevice';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Footer from '../footer/Footer';
import Button from "@mui/material/Button";



function CustomerDetails(props) {
    const [customer, setCustomerdata] = React.useState([]);
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [type, setType] = React.useState("");
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);

    const [addressObj, setAddressObj] = React.useState({

        addressType: type,
        fullAddress: address,
        city: city,
        state: state,
    });
    const takeAddressType = (event) => {
        setAddressObj({ ...addressObj, addressType: event.target.value });
    };
    const takeFullAddress = (event) => {
        setAddressObj({ ...addressObj, fullAddress: event.target.value });
    };
    const takeCity = (event) => {
        setAddressObj({ ...addressObj, city: event.target.value });
    };
    const takeState = (event) => {
        setAddressObj({ ...addressObj, state: event.target.value });
    };

    const loadCustomerdata = () => {
        getTheCard()
            .then((response) => {
                console.log(response, "data recieved");
                setCustomerdata(response.data.result[0].user_id);
            })
            .catch((err) => {
                console.warn(err);
            });
    };


    const updateCustomerdetails = () => {
        editCustomerDetailsApi(addressObj)
            .then((response) => {
                console.log("updated address ", response);
                props.continueOrder(true)
            })
            .catch((err) => {
                console.warn(err);
            });
    };

    const continueOrder = () => {
        setOpenOrderSummery(!openOrderSummery)
    }


    React.useEffect(() => {
        loadCustomerdata();
    }, []);

    

    return (
        <div className="validation-box">
            <div className="customer-details-title">
                <p>Customer details</p>
                <div className="addnewaddress">
                    <p>Add new Address</p>
                </div>
            </div>
            <div className="RadioButtons">
                <FormControl component="fieldset">
                    <FormLabel style={{ paddingRight: "250px" }} component="legend">
                        {/* Type */}
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                        onChange={takeAddressType}
                    >
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Home"
                            control={<Radio />}
                            label="Home"
                        />
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Office"
                            control={<Radio />}
                            label="Office"
                        />
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className="inputfields-container">
                <div className="row-1-field">
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="fullname-1r"
                        value={customer.fullName}
                        helperText="Full Name"
                    />
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="mobilenum-1r"
                        value={customer.phone}
                        helperText="Mobile Number"
                    />
                </div>
                <div className="row-2-field">
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Address"
                        className="Address-2r"
                        onChange={takeFullAddress}
                    />
                </div>
                <div className="row-3-field">
                    <TextField
                        label="City/Town"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="city-3r"
                        onChange={takeCity}
                    />
                    <TextField
                        label="State"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="state-3r"
                        onChange={takeState}
                    />
                </div>
            </div>

            <div className="continue-button-container">
                <div className="continue-button" onClick={updateCustomerdetails}>
                    <p >CONTINUE</p><br></br>
                </div>
            </div>
{/* 
            <div className='orderr'>
                <div className='summaryy'>
                    Order summary
                </div>
            </div>
            <div>
                <Footer />
            </div> */}
        </div>
    );
}

export default CustomerDetails