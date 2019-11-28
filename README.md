# Doctor_Specialty_CURD
Create doctor CURD and specialty CURD operation

# We need postman tool for check the responce of API's

# To run this project
    1.npm i
    2.install some Dependency directories
    3.node index.js
    4.Please read following things

# Project workflow

    1. First we have to create specialty, for that i have used POST method,

            ==> localhost:3020/api/createSpecialty/

            input : {
                        "splName" : "General"
                    }

    2.Next we have read the specialty docs, for that i have used POST method,

            ==>  localhost:3020/api/readSpecialtyByName

            input : {
                        "splName" : "General"
                    }

    3. Next we have to update the specialty docs, for that i have used PUT method,

            ==> localhost:3020/api/updateSpecialty/

            input : {
                "splName" : "General",
                "updateSplName" : "Ortho & General"
            }

    4. Next we have to delete the specialty docs  for that i have used PUT method,

            ==> localhost:3020/api/deleteSpecialty/

            input : {
                "splName" : "General"
            }

    5. The above samething we need to do in Doctor CRUD operation

# I have attached the postman screenshot inside the helper folder for your reference, which will be used to execute the API's.,Please find that attachement.. 
