document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".registerForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const userData = {
      First_Name: document.querySelector(".fname").value,
      Middle_name: document.querySelector(".mname").value,
      Last_name: document.querySelector(".lname").value,
      Email: document.querySelector(".email").value,
      Phone_Number: document.querySelector(".phoneNum").value,
      Loan_Amount: document.querySelector(".loan-amount").value,
      Loan_Term: document.querySelector(".loanTerm").value,
      Employee_Status: document.querySelector(".employStats").value,
      Monthly_Income: document.querySelector(".monInc").value,
      Purpose_of_loan: document.querySelector(".purpose-of-loan").value,
      date_of_birth: document.querySelector(".date-of-birth").value,
      address: document.querySelector(".address").value,
      Marital_Status: document.querySelector(".marital-stats").value,
    };
    console.log("Form Data:", userData);
    const jsonData = JSON.stringify(userData);
    console.log("JSON Data:", jsonData);

    const blob = new Blob([jsonData], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob)
    link.download = "User-Info.json";
    link.click();

    document.querySelector(".registerForm").reset();


  }
  )
}
)
