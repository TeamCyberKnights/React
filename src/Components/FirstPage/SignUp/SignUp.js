import React, {Component} from 'react'
import classes from './SignUp.css'
import axios from 'axios'
import Aux from '../../Auxiliar'

class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            mail:"",
            nume:"",
            prenume:"",
            utilizator:"",
            parola:"",
            statusCode: 200,
            mailNecompletat: false,
            numeNecompletat: false,
            prenumeNecompletat: false,
            utilizatorNecompletat: false,
            parolaNecompletata: false,
            incercareTrimitere: false
        }
    }

    updateState = () =>
    {
        this.setState({mail:this.refs.mail.value})
        if(this.refs.mail.value!==""){this.setState({mailNecompletat:false});}
        else{this.setState({mailNecompletat:true});}
        this.setState({nume:this.refs.nume.value})
        if(this.refs.nume.value!==""){this.setState({numeNecompletat:false});}
        else{this.setState({numeNecompletat:true});}
        this.setState({prenume:this.refs.prenume.value})
        if(this.refs.prenume.value!==""){this.setState({prenumeNecompletat:false});}
        else{this.setState({prenumeNecompletat:true});}
        this.setState({utilizator:this.refs.utilizator.value})
        if(this.refs.utilizator.value!==""){this.setState({utilizatorNecompletat:false});}
        else{this.setState({utilizatorNecompletat:true});}
        this.setState({parola:this.refs.parola.value})
        if(this.refs.parola.value!==""){this.setState({parolaNecompletata:false});}
        else{this.setState({parolaNecompletata:true});}
    }
    async inregistrare(){
        let content = null;
        try {
          let response = await axios.post("http://localhost:8080/api/studenti/inregistrare",
          {"nume":this.state.nume,"prenume":this.state.prenume,"utilizator": this.state.utilizator,"parola":this.state.parola,"mail":this.state.mail})
          content = response.data
          console.log(content);  
        } catch (e) {
          console.warn(e)
          this.setState({statusCode:400})
        }
      }
    signUp = () =>
    {
        this.setState({incercareTrimitere:true});
        if(this.state.mail!==""&&this.state.nume!==""&&this.state.prenume!==""&&this.state.parola!==""&&this.state.utilizator!=="")
        {   
            this.inregistrare();
            this.clearInput();
            this.updateState();
            this.setState({incercareTrimitere:false})
        }
    }
    clearInput = () =>
    {
        this.setState({mail:""});
        this.setState({nume:""});
        this.setState({prenume:""});
        this.setState({utilizator:""});
        this.setState({parola:""});
        this.refs.mail.value="";
        this.refs.nume.value="";
        this.refs.prenume.value="";
        this.refs.parola.value="";
        this.refs.utilizator.value="";
    }
    verificaMail = () =>
    {
        if(this.state.mailNecompletat===true&&this.state.incercareTrimitere===true){return(<p className={classes.eroriAfisare}>Email invalid</p>)}
        else {return null;}
    }
    verificaNume = () =>
    {
        if(this.state.numeNecompletat===true&&this.state.incercareTrimitere===true){return(<p className={classes.eroriAfisare}>Nume invalid</p>)}
        else {return null;}
    }
    verificaPrenume = () =>
    {
        if(this.state.prenumeNecompletat===true&&this.state.incercareTrimitere===true){return(<p className={classes.eroriAfisare}>Prenume invalid</p>)}
        else {return null;}
    }
    verificaParola = () =>
    {
        if(this.state.parolaNecompletata===true&&this.state.incercareTrimitere===true){return(<p className={classes.eroriAfisare}>Parola invalida</p>)}
        else {return null;}
    }
    verificareUtilizator = () =>
    {
        if(this.state.utilizatorNecompletat===true&&this.state.incercareTrimitere===true)
        {
            console.log(this.state.utilizator);
            return(<p className={classes.eroriAfisare}>Utilizator invalid</p>)
        }
        else 
        {
            return null;
        }
    }
    render()
    {
        let eroare = [];
        let mailNecompletat = null;
        let numeNecmpletat = null;
        let prenumeNecompletat = null;
        let parolaNecompletata = null;
        let utilizatorNecompletat = null;
        mailNecompletat = this.verificaMail();
        numeNecmpletat = this.verificaNume();
        prenumeNecompletat = this.verificaPrenume();
        parolaNecompletata = this.verificaParola();
        utilizatorNecompletat = this.verificareUtilizator();
        if(this.state.statusCode==400)
        {
            eroare.push(<p className={classes.eroriAfisare}>Email invalid</p>)
        }
        return(
            
            <div class={classes.containerSignUp}>
                <p>CONT NOU</p>
                <input onChange={this.updateState} ref="mail" type="text" placeholder="Mail Institutional"></input>
                {mailNecompletat}
                {eroare}
                <input onChange={this.updateState} ref="nume" type="text" placeholder="Nume"></input>
                {numeNecmpletat}
                <input onChange={this.updateState} ref="prenume" type="text" placeholder="Prenume"></input>
                {prenumeNecompletat}
                <input onChange={this.updateState} ref="utilizator" type="text" placeholder="Utilizator"></input>
                {utilizatorNecompletat}
                <input onChange={this.updateState} ref="parola" type="password" placeholder="Parola"></input>
                {parolaNecompletata}
                <button onClick={this.signUp}>SALVEAZA</button>
            </div>
        )
    }
}

export default SignUp;