import { Observable } from 'rxjs';
import './app.css';

export default class App {
  constructor() {
    console.log('test hot replace: ', Observable);
  }
}

const app = new App();
