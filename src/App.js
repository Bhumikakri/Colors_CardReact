
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='app'>
      <Card clrCard="#FF6663" clrName="pink"/>
      <Card clrCard="#57F287" clrName="Green"/>
      <Card clrCard="#000000" clrName="Black"/>
      <Card clrCard="#005aff" clrName="Blue"/>
      <Card clrCard="#FF7722" clrName="Orange"/>
      <Card clrCard="#C0C0C0" clrName="Gray"/>
      <Card clrCard="#ED1C24" clrName="Red"/>
      <Card clrCard="#FFF01F" clrName="Yellow"/>
    </div>
  );
}

export default App;
