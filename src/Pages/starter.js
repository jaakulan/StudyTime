import React, { useState, useEffect } from "react";

const Starter = () => {
    return (
        <div>
            <h1>StudyTime</h1>
            <h2>Please use the form below to add websites you would like to block while you study</h2>
            <form>
                <input type="text" name="bannedwebsite" placeholder="Please enter website"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Starter