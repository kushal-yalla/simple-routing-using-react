const Contact = () => {
    return (<div>
      
        <h1>THIS IS CONTACT US PAGE</h1>
        
        <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input><br></br>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input><br></br>

    <label for="email">email</label>
    <input type="email" id="email" name="email" placeholder="email.."></input><br></br>

    <label for="issue">issue</label>
    <select id="issue" name="issue">
      <option value="suggestion">suggestion</option>
      <option value="complaint">complaint</option>
      <option value="feedback">feedback</option>
    </select>
<br></br>
    <input type="submit" value="Submit"></input>
    <h5>please submit your details we will contact you within 24 hours</h5>
    </form>
  
        </div>
    );
  };
  
  export default Contact;