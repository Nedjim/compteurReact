import React from 'react';

export default class Print extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id='compteur'>
                <div className='bloc mounth'>
                    <h3>Mounth</h3>
                    <div>{this.props.mounth}</div>
                </div>
                <div className='bloc days'>
                    <h3>Days</h3>
                    <div>{this.props.days}</div>
                </div>
                <div className='bloc hours'>
                    <h3>Hours</h3>
                    <div>{this.props.hours}</div>
                </div>
                <div className='bloc minutes'>
                    <h3>Minutes</h3>
                    <div>{this.props.minutes}</div>
                </div>
                <div className='bloc secondes'>
                    <h3>Secondes</h3>
                    <div>{this.props.secondes}</div>
                </div>
            </div>
        )
    }
}