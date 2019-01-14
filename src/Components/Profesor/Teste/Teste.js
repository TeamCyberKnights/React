import React , {Component} from 'react'
import classes from './Teste.css'
import axios from 'axios'

class Teste extends Component
{
    state = 
    {
        utilizator: 'Alexandru Dita',
        numeTest:'',
        materie:'',
        descriere:'',
        tipTest:undefined,
        durata:'',
        testeleMele:
        [
            ["Test Grupa 1076","Alexandru Dita","Acesta este un test destinat grupei 1076 pentru prima nota","JAVA",true,20],
            ["Test Grupa 1076","Alexandru Dita","Acesta este un test destinat grupei 1076","POO",false,15],
            ["Test Grupa 1076","Alexandru Dita","Acesta este un test destinat grupei 1076","POO",false,15],
        ],
        testePublic:
        [
            ["Test Grupa 1071","Catalin Botezatu","Acesta este un test destinat grupei 1076","JAVA",false,20],
            ["Test Grupa 1072","Andreea Marin","Acesta este un test destinat grupei 1076","JAVA",false,20],
            ["Test Grupa 1073","Stefan Banica Jr.","Acesta este un test destinat grupei 1076","JAVA",false,20],
        ]
    }
    //---------------------------------------------------------------------------------------------------------------------//
    loadTeste = async() => {
        console.log("dsadasdas");
        let content = null;
        try {
          let response = await axios.post("http://localhost:8080/api/teste",
          {
              query:{
                  "profesorId":'1'
              }
          })
          console.log("dsadasassadadadas");
          content = response.data
          console.log(content); 
          console.log("-----");
          console.log(response);
        } catch (e) {
          console.warn(e)
        }
      }

//---------------------------------------------------------------------------------------------------------------------//
    getValueNumeTest = (event) =>
    {
        this.setState({numeTest:event.target.value})
    }

    getValueMaterie = (event) =>
    {
        if(event.target.value=='Selecteaza Materia')
        {
            this.setState({materie:''});
        }
        else
        {
            this.setState({materie:event.target.value})
        }
    }
    getValueDescriereTest = (event) =>
    {
        this.setState({descriere:event.target.value});
    }
    getValueTipTestPublic = (event) =>
    {
        this.setState({tipTest: false})
    }

    getValueTipTestPrivat = (event) =>
    {
        this.setState({tipTest: true})
    }

    getValueDurataTest = (event) =>
    {
        if(event.target.value==='Selecteaza Durata')
        {
            this.setState({durata:''})
        }
        else
        {
            this.setState({durata:event.target.value})
        }
    }
    //--------------------------------------------------------------------------------------------------------------------//
    getTesteleMele = () =>
    {
        let myTests = [];
        this.state.testeleMele.map((element,index)=>
        {
            let denumireTest = element[0];
            let profesor = element[1];
            let descriere = element[2];
            let materie = element[3];
            let tipTest = element[4];
            let tip = tipTest===true?"Private":"Public";
            let durata = element[5];
            myTests.push(<div className={classes.Test}>
                <p className={classes.testDenumire}>{denumireTest}</p>
                <p className={classes.testProfesor}>{profesor}</p>
                <p className={classes.testDescriere}>{descriere}</p>
                <p className={classes.testMaterie}>{materie}</p>
                <p className={classes.testTip}>{tip}</p>
                <p className={classes.testDurata}>{durata} minute</p>
                <button>Editeaza</button>
            </div>)
        })

        return myTests;
    }

    getTestelePublice = () =>
    {
        let tests = [];
        this.state.testePublic.map((element,index)=>
        {
            let denumireTest = element[0];
            let profesor = element[1];
            let descriere = element[2];
            let materie = element[3];
            let tipTest = element[4];
            let tip = tipTest===true?"Private":"Public";
            let durata = element[5];
            tests.push(<div className={classes.Test}>
                <p className={classes.testDenumire}>{denumireTest}</p>
                <p className={classes.testProfesor}>{profesor}</p>
                <p className={classes.testDescriere}>{descriere}</p>
                <p className={classes.testMaterie}>{materie}</p>
                <p className={classes.testTip}>{tip}</p>
                <p className={classes.testDurata}>{durata} minute</p>
            </div>)
        })
        return tests;
    }
    adauga = () =>
    {
        let denumireTest, profesor, descriere, materie, tipTest, tip, durata;
        if(this.state.numeTest!=''&&this.state.materie!=''&&this.state.descriere!=''&&this.state.tipTest!=undefined
           &&this.state.durata!='')
        {
            denumireTest = this.state.numeTest;
            profesor = this.state.utilizator;
            descriere = this.state.descriere;
            materie = this.state.materie;
            tipTest = this.state.tipTest;
            durata = this.state.durata;
            
            let testeleMeleCopie = this.state.testeleMele.slice();
            let nrInregistrari = testeleMeleCopie.length;
            let testNou = [denumireTest,profesor,descriere,materie,tipTest,durata];
            testeleMeleCopie[nrInregistrari+1]=testNou;
            this.setState({testeleMele:testeleMeleCopie});
        
        }

    }

    render()
    {   
        let testeleMele = null;
        let testPublic = null;
        testeleMele = this.getTesteleMele();
        testPublic = this.getTestelePublice();
        return(
            <div className={classes.containerTest}>
                <div className={classes.adaugaTest}>
                        <p>Creeaza un test</p>
                        <input ref="testeNumeTest" onChange={(event)=>this.getValueNumeTest(event)} className={classes.numeTest} type="text" placeholder="Nume Test"></input>
                        <select onChange={(event)=>this.getValueMaterie(event)} className={classes.selectTest}>
                            <option value="Selecteaza Materia">Selecteaza Materia</option>
                            <option value="JAVA">JAVA</option>
                            <option value="POO">POO</option>
                        </select>
                        <textarea ref="testeDescriereTest"  onChange={(event)=>this.getValueDescriereTest(event)} placeholder="Descriere Test" className={classes.descriereTest}></textarea>
                        <div>
                            <label><input ref="testeTipTestPublic" onChange={(event)=>this.getValueTipTestPublic(event)} type="radio" name="tipTest" value="Public"></input>Public</label>
                            <label><input ref="testeTipTestPrivat" onChange={(event)=>this.getValueTipTestPrivat(event)} type="radio" name="tipTest" value="Privat"></input>Privat</label>
                        </div>
                        <label>Durata Test<select onClick={(event)=>this.getValueDurataTest(event)}className={classes.durataTest}>
                                <option>Selecteaza Durata</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                            </select></label>
                        <button onClick={this.adauga} className={classes.adaugaTestButton}>Adauga Test</button>
                </div>
                <div className={classes.testeExistente}>
                    <div className={classes.testeleMele}>
                        <p className={classes.headerTeste}>TESTELE MELE</p>
                        {testeleMele}
                    </div>
                    <div className={classes.testePublice}>
                        <p className={classes.headerTeste}>TESTE PUBLICE</p>
                        {testPublic}
                    </div>
                </div>
            </div>
        )
    }
}

export default Teste;