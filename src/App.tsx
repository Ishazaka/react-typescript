
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';


function App() {

  const namePerson = {
    first: "John",
    last: "Doe"
  }

  const personList = [
   {
      first: 'Bruce',
      last : 'Lee'
     },
     {
      first: 'Alhpa',
      last : 'John'
     },
     {
      first: 'Aima',
      last : 'lover'
     }

    ]

  return (
    <div className="App">
        {/* <Greet name="Users" messageCount={10} isLogged={true} />
        <Person name={namePerson} />
        <PersonList names={personList} /> */}
        <Status status={'loading'}/>
        <Heading > Placeholder text</Heading>
       <Oscar> <Heading>  Oscar goes to Disney Palace </Heading> </Oscar>
    </div>
  );
}

export default App;





// there are two things to use types or interfaces, but one article suggest me to use type while building the application and interface when building libraries, I used that pattern