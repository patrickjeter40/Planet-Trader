import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';


export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        firstn: event.target.firstn.value,
        lastn: event.target.lastn.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()

      // Check for the redirect property in the JSON response.
        if (result.redirect) {
            // Redirect the user to the specified URL.
            window.location.href = result.redirect
  }
      
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      
    <div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl variant="standard">
              <InputLabel htmlFor="firstn">First Name</InputLabel>
              <Input id="firstn" defaultValue="" />
          </FormControl>
          <FormControl variant="standard">
              <InputLabel htmlFor="lastn">Last Name</InputLabel>
              <Input id="lastn" defaultValue="" />
          </FormControl>
        </div>
      </form>
        <div id="g_id_onload"
            data-client_id="392887464032-0ule5ia2h0tbpmnpmamjf0tqdbhmcscc.apps.googleusercontent.com"
            data-context="signup"
            data-ux_mode="popup"
            data-login_uri="https://planet-trader.vercel.app/sign-up"
            data-itp_support="true">
        </div>

        <div class="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="filled_black"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
        </div>
    </div> 
    )
  }