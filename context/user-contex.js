import React from "react"


const userContexProvider = () => {
    return (
        <React.Fragment>
            
            <div
                className={`${classes.control} ${passwordState.isvalid === false ? classes.invalid : ''
                    }`}
            >
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
            </div>
        </React.Fragment>
    )
}

export default userContexProvider