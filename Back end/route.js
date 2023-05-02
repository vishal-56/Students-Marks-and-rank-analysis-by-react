const express = require('express')

const studentcontroller = require('./controller')

const route = express.Router()

route.post('/secondyear1',studentcontroller.adduser)
route.get('/secondyear1marks',studentcontroller.getdata)


route.post('/secondYear2',studentcontroller.adduser1)
route.get('/secondyear2marks',studentcontroller.getdata1)


// route.post('/loginpost',studentcontroller.addus)
// route.get('/loginget',studentcontroller.getda)



route.post('/thirdYearfirst',studentcontroller.adduser2)
route.get('/thirdyearfirstmarks',studentcontroller.getdata2)


route.post('/thirdYear2',studentcontroller.adduser3)
route.get('/thirdyear2marks',studentcontroller.getdata3)

route.put('/updatestudent/:ROLL',studentcontroller.updateuser)
route.delete('/deletestudent/:ROLL',studentcontroller.deleteuser)
route.get('/findstudent/:ROLL',studentcontroller.finduser)



// User routes -------->>>>>>>>>>

route.put('/update/:email',studentcontroller.updateuser2)
route.delete('/delete/:email',studentcontroller.deleteuser2)
route.get('/findone/:email',studentcontroller.finduser2)
route.get('/test/:email', (req, res) => {
    const { email } = req.params;
    res.send(`Received email: ${email}`);
  });

route.post('/register',studentcontroller.adduser4)
route.get('/findall',studentcontroller.getdata4)


module.exports = route