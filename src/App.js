import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ListingComponent from './components/ListingComponent/ListingComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <div className="container-fluid">

        <h2>Available Stays</h2>

        <br/>
        {/* replace below with SuggestedPlaces component*/}
        <div className='row'>
          <h4>Places you might Like</h4>
          {/* pass corresponding listingAPI prop to get suggested places*/}
          <ListingComponent limit= {3} showPagination = {false}></ListingComponent>

        </div>

        <br/>

        {/* replace below with NearbyStays component*/}
        <div className='row'>
          <h4>Nearby Stays</h4>
          <ListingComponent limit= {6}></ListingComponent>
        </div>
        
      </div>

      {/* insert the profile menu layover here using React.createPortal so that it lies in the outer layer */}
      <div className="layover"></div>
    </div>
  );
}

export default App;
