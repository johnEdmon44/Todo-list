import '/dist/style.css';
import _ from 'lodash';
import './function';
import { project } from './function';
'use strict';


//run tab switch
project.tabSwitch();


const projectList = [
  {
    title: 'Library',
    task: [{id: 1, name: 'Improve UI'}, {id: 2, name: 'Refactor'}]
  }, {
    title: 'Restaurant',
    task: [{id: 3, name: 'Improve UI'}, {id: 4, name: 'Refactor'}]
  }
]

let name = 'Library'

let hi = projectList.find(p => p.title === name)
let hello = hi.task.find(t => t.id === 2)
hi.task.splice(hello, 1)

console.log(projectList)


const inbox = document.querySelector('#inbox');
console.log(inbox.id)