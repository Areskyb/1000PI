

import {nouns} from 'nouns'

export const ran = num => {
    let total = [];
    let length = nouns.length;
    for(let i = 0; i < num; i++){
      total.push(nouns[Math.floor(Math.random() * length)])
    }
    return total
  }