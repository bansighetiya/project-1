import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';

function App() {

  const data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        rwl: {
            admission: 50,
            vacant_seat: 10
        },
        rw2: {
            admission: 30,
            vacant_seat: 20
        },
        rw3: {
            admission: 25,
            vacant_seat: 25
        },
        rw4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}


for(let k in data) {
  if(k === 'personal_info'){
    console.log(data[k].name, data[k].age, data[k].city);
  } else if (k === 'courses'){
    data[k].map((m) => console.log(m));
  } else{
    for(let j in data[k]){
        console.log(data[k][j].admission, data[k][j].vacant_seat);
    }   
  }
}




  return (
    <Demo />
  );
}

export default App;
