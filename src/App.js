import './App.css';

function App() {

  function alr(){
    alert("Вы успешно забронировали студию!")
  }

  const getDate = () => new Date().toISOString().split('T')[0];

  return (
    <site className="flex flex-row gap-8">
      <form className='flex flex-col justify-center w-1/2 px-6'>
        <div className='text-4xl text-center gap-4 py-4 text-orange-900'>
          Фотостудия "Салют". Аренда фотостудий
        </div>
        <div className='flex flex-col justify-center text-2xl font-light gap-4'>
          <div className='flex flex-col'>
            <label for="name">ФИО*</label>
            <input className='border valid:border-b-black invalid:border-red-500 rounded-lg px-4 h-12' type="name" id="name" name="name" pattern="[А-Яа-я]*?\s[А-Яа-я]*?\s[А-Яа-я]*" placeholder="Фамилия Имя Отчество" required/>
          </div>
          <div className='flex flex-col'>
            <label for="tel">Номер телефона*</label>
            <input className='border valid:border-b-black invalid:border-red-500 rounded-lg px-4 h-12' type="tel" id="tel" name="tel" pattern='^((\+7|7|8)+([0-9]){10})$' placeholder="+7(8)9876543210" required/>
          </div>
          <div className='flex flex-col'>
            <label for="email">E-mail</label>
            <input className='border valid:border-b-black invalid:border-red-500 rounded-lg px-4 h-12' type="email" id="email" name="email" pattern='([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)' placeholder="email@email.ru"/>
          </div>
          <div className='flex flex-row gap-8 place-content-center'>
            <div className='flex flex-col'>
              <label for="date">Дата начала аренды*</label>
              <input className='arrivaldate-input border valid:border-b-black invalid:border-red-500 rounded-lg px-4 h-12' type="date" min={getDate()} id="date" name="date" required />
            </div>
            <div className='flex flex-col'>
              <label for="number">Количество дней(до 7)*</label>
              <input className='border valid:border-b-black invalid:border-red-500 rounded-lg px-4 h-12' type="number" id="number" name="number" min="1" max="7" required />
            </div>
          </div>
          <div className='flex text-lg justify-center text-center'>
            * Обязательные/не заполненные поля выделенны красным цветом.
          </div>
          <div className='flex justify-center'>
            <input className='border border-orange-900 h-12 w-56 hover:bg-orange-300 hover:border-transparent rounded-lg' type="submit" value="Забронировать" onClick={alr}/>
          </div>
        </div>
      </form>
      <foto className="w-1/2">
        <img src="/studio2.jpg" className='flex h-screen' alt=''/>
      </foto>
    </site>
  );
}

export default App;
