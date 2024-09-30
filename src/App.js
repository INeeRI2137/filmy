
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="tytul" class="form-label">Tytuł filmu</label>
          <input type="text" class="form-control" id="tytul" /> [(ngModel)]="tytul" name="tytul">
        </div>
        <div class="mb-3">
          <label for="rodzaj" class="form-label">Rodzaj</label>
          <select class="form-select" id="rodzaj" /> [(ngModel)]="rodzaj" name="rodzaj">
          <option value="">Wybierz...</option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>
      </></div><button type="button" class="btn btn-primary" /></></> (click)="dodajFilm()">Dodaj</button>
  </form>







    </div>
  );
}

export default App;
