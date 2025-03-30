'use client';

import { validateForm } from "@/components/functions/form/form-validation";
import ReactSelect from "@/components/functions/form/ReactSelect";
import { useState } from 'react';

const ContactUs = () => {
  const [select1Value, setSelect1Value] = useState(null);
  const [select2Value, setSelect2Value] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const valid = validateForm(form);

    if (valid) {
      console.log('Form submitted!');
    }
  };

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

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
              <input
                type="text"
                placeholder="type text here"
                id="input1"
                name="input1"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="input2">INPUT 2</label>
              <input
                type="text"
                placeholder="type text here"
                id="input2"
                name="input2"
                required
              />
            </div>
          </div>

          <div className="form-col-2">
            <div className="form-input">
              <label htmlFor="input3">INPUT 3</label>
              <input
                type="text"
                placeholder="type text here"
                id="input3"
                name="input3"
              />
            </div>
            <div className="form-input">
              <label htmlFor="input4">INPUT 4</label>
              <input
                type="text"
                placeholder="type text here"
                id="input4"
                name="input4"
                required
              />
            </div>
          </div>

          <div className="form-col-2">
            <div className="form-input">
              <label htmlFor="select1">Select 1</label>
              <ReactSelect
                instanceId="select1"
                inputId="select1"
                name="select1"
                options={options}
                classNamePrefix="react-select"
                value={select1Value}
                onChange={setSelect1Value}
              />
              <input type="hidden" name="select1" value={select1Value?.value || ''} />
            </div>
            <div className="form-input">
              <label htmlFor="select2">Select 2</label>
              <ReactSelect
                instanceId="select2"
                inputId="select2"
                name="select2"
                options={options}
                classNamePrefix="react-select"
                value={select2Value}
                onChange={setSelect2Value}
              />
              <input type="hidden" name="select2" value={select2Value?.value || ''} />
            </div>
          </div>

          <div className="form-col-1">
            <div className="form-input">
              <label htmlFor="input5">INPUT 5</label>
              <input
                type="text"
                placeholder="type text here"
                id="input5"
                name="input5"
              />
            </div>
          </div>

          <div className="form-col-1">
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="button button--primary">
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;