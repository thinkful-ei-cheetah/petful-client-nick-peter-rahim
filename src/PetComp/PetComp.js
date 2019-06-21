import React, { Component } from 'react';
import './PetComp.css'

export default class PetComp extends Component {
    // constructor(){

    // }

    render() {

        return (
            <>
            {console.log(this.props)}
                <div className="petCol">
                    {this.props.name}
                    <img src={this.props.imgURL} alt={this.props.imgAlt} />
                    
                    <div>
                        <div>
                            Sex: {this.props.sex}
                        </div>
                        <div>
                            Age: {this.props.age}
                        </div>
                        <div>
                            Breed:{this.props.breed}
                        </div>
                        <div>
                            story: {this.props.story}
                        </div>
                    </div>

                    <button>
                        adopt
                    </button>
                </div>
            </>
        )

    }
}

