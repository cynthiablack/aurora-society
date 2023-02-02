import React from "react"

export default function Navbar() {
    const [formData, setFormData] = React.useState(
        {
            postalCode: ""
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <nav>
            <h2 className="nav--title">Anchorage Aurora Society</h2>
            <form className="nav--search--container" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    placeholder="Enter a postal code"
                    name="postalCode"
                    onChange={handleChange}
                    value={formData.postalCode}
                />
                <label htmlFor="postalCode" className="form--input--label">Enter a location</label>
				<button className="form--button">Submit</button> 
            </form>
        </nav>
    )
}