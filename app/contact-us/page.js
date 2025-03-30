'use client';

import { validateForm } from "@/components/functions/form-validation/form-validation";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const valid = validateForm(form);
    
        if (valid) {
          console.log('Form submitted!');
        }
      };


    return ( 
        <main>
            <div className="container">

                <div className="text-primary">PRIMARY</div>
                <div className="text-secondary">Secondary</div>

                <div className="button button--primary mb-10">Button</div>
                <div className="button button--secondary mb-10">Button</div>

                <h1>heading1</h1>
                <div className="h1">heading1</div>

                <h2>heading2</h2>
                <div className="h2">heading2</div>

                <h3>heading3</h3>
                <div className="h3">heading3</div>

                <h4>heading4</h4>
                <div className="h4">heading4</div>

                <h5>heading5</h5>
                <div className="h5">heading5</div>

                <h6>heading6</h6>
                <div className="h6">heading6</div>

                <div className="flex mb-10">
                    <div className="fade-left w-1/4 h-40 bg-primary"></div>
                    <div className="fade-in w-1/4 h-40 bg-secondary"></div>
                    <div className="fade-up w-1/4 h-40 bg-black"></div>
                    <div className="fade-right w-1/4 h-40 bg-grey"></div>
                </div>


                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-col-2">
                        <div className="form-input">
                            <label htmlFor="input1">INPUT 1</label>
                            <input type="text" placeholder="type text here" id="input1" name="input1" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="input2">INPUT 2</label>
                            <input type="text" placeholder="type text here" id="input2" name="input1" required/>
                        </div>
                    </div>

                    <div className="form-col-2">
                        <div className="form-input">
                            <label htmlFor="input1">INPUT 1</label>
                            <input type="text" placeholder="type text here" id="input1" name="input1"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="input2">INPUT 2</label>
                            <input type="text" placeholder="type text here" id="input2" name="input1" required/>
                        </div>
                    </div>

                    <div className="form-col-1">
                        <div className="form-input">
                            <label htmlFor="input1">INPUT 1</label>
                            <input type="text" placeholder="type text here" id="input1" name="input1"/>
                        </div>
                    </div>
                    
                    <div className="form-col-1">
                        <div className="form-input">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" className="button button--primary">SUBMIT</button>
                    
                </form>

            </div>

   

        </main>
     );
}
 
export default ContactUs;
