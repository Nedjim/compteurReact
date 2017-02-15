import React from 'react';
import Print from './Print.jsx';

export default class Compteur extends React.Component {

    constructor(){
        super();
        this.state = {}
        setInterval(this.actualDate.bind(this), 1000);
    }

    mounth(){
        let mounth = Math.round(this.state.time / 2629800000);
        this.setState({mounth: mounth});

    }

    days(){
        let days = Math.round((this.state.time / 86400000)%30);
        this.setState({days: days});
    }

    hours(){
        let hours = Math.round(this.state.time / 3600000 % 24);
        this.setState({hours: hours});
    }

    minute(){
         let min = Math.round((this.state.time / 60000)%60);
          this.setState({minutes: min});
     }

    seconds(){
         let sec = Math.round((this.state.time / 1000)%60);
         this.setState({seconds: sec});
     }

    actualDate () {
        let fin = new Date(2017, 6, 14);
        let today = new Date();
        let compteur = fin.getTime() - today.getTime();

        this.setState({time: compteur});
        this.mounth();
        this.days();
        this.hours();
        this.minute();
        this.seconds();

    }

    render() {
        return (
            <div id="content">
                <Print mounth={this.state.mounth}
                       days={this.state.days}
                       hours={this.state.hours}
                       minutes={this.state.minutes}
                       secondes={this.state.seconds}/>
                <p>Elapsed time before July 14th, 2017</p>
            </div>
        )
    }
}