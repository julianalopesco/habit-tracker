const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) 

const data ={
    study: ['01-01', '01-02','01-06'],
    read: ['01-03'],
    eatHealthy: ['01-02'],
}

nlwSetup.setData(data) 
nlwSetup.load()