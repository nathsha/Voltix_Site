// import "bootstrap/dist/css/bootstrap.min.css";
// import {postContact} from '../services/api';
// import React, { useState } from 'react';
// const ContactForm:React.FC = () => {
    
//     const [formData, setFormData] = useState({
//         name: '',
//         phone_no: '',
//         email: '',
//         message: '',
//       });
//       const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
//         try{
//             const response = await postContact(formData);
//             if (response.status === 201){
//                 setFormData({
//                     name: '',
//                     phone_no: '',
//                     email: '',
//                     message: '',
//                 });
//                 alert('Contact form submitted successfully');
//             }else{
//                 console.error('Error storing data:', response.statusText);
//                 console.log(response.data);
//                 alert('Error submitting contact form');
//             }
//         }catch(error){
//             console.error(error);
//             alert('Error submitting contact form');
//         }
//       };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <h2>Fill up the Form</h2>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input type="text" className="form-control" id="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}></input>
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="pjone" className="form-label">
//               Phone No.
//             </label>
//             <input type="number" className="form-control" id="phone" value={formData.phone_no}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone_no: e.target.value })
//               }></input>
//           </div>
//         </div>
//         <div className="row">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input type="text" className="form-control" id="email" value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input>
//         </div>
//         <div className="row">
//           <label htmlFor="message" className="form-label">
//             Message?Queries
//           </label>
//           <input type="text" className="form-control" id="message" value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }></input>
//         </div>
//         <button type="submit" className="btn btn-primary" >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
import "bootstrap/dist/css/bootstrap.min.css";
import { postContact } from '../services/api';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await postContact(formData);
      if (response.status === 201) {
        setFormData({
          name: '',
          phone_no: '',
          email: '',
          message: '',
        });
        alert('Contact form submitted successfully');
      } else {
        console.error('Error storing data:', response.statusText);
        alert('Error submitting contact form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting contact form');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Fill up the Form</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone No.
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={formData.phone_no}
              onChange={(e) => setFormData({ ...formData, phone_no: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="row">
          <label htmlFor="message" className="form-label">
            Message/Queries
          </label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;