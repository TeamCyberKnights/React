import React , {Component} from 'react'
import Aux from '../../Auxiliar'
import Acasa from '../Acasa/Acasa'
import Istoric from '../Istoric/Istoric'
import Test from '../Teste/Teste'
import Email from '../Email/Email'

class Display extends Component
{
    state=
    {
        webPage:2
    }

    renderDisplay = (nr) =>
    {
        let display = [];
        if(this.state.webPage==1)
        {
            display.push(<Acasa/>)
        }
        else if(this.state.webPage==2)
        {
            display.push(<Istoric/>)
        }
        else if(this.state.webPage==3)
        {
            display.push(<Test/>)
        }
        else if(this.state.webPage==4)
        {
            display.push(<Email/>)
        }
        return display;
    }
    render()
    {
        let display = null;
        display = this.renderDisplay(this.state.webPage);
        return(
            <Aux>
                {display}
            </Aux>
        )
    }
}

export default Display;