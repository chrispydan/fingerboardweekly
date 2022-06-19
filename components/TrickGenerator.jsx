import React, { useState, useEffect } from 'react';
import * as Stance from '../deps/stances'
import * as Flips from '../deps/flips'
import * as Rotation from '../deps/rotation'


function TrickGenerator() {
    const randomFlip = ["Kickflip ","Varial Flip ","360 Flip ","Hardflip ","360 Hardflip ",
    "Heelflip ",
    "Varial Heelflip ",
    "Inward Heelflip ",
    "Lazerflip ",
    "360 Inward Heelflip ",
    "Backside Shuvit ",
    "Backside 360 Shuvit ",
    "Frontside Shuvit ",
    "Frontside 360 Shuvit "]
    const randIndex = Math.floor(Math.random()*randomFlip.length)

    return (
        <div className="dark:bg-slate-900 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">Random Trick</h3>

              <span className="pb-3 mb-3">{randomFlip[randIndex]}</span>

          
        </div>
    )
  }

export default TrickGenerator;