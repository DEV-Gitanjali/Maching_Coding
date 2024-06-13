import {useEffect ,useState}from 'react'
import './App.css'

const App = () => {
  const [products , setproducts]= useState([]);
  const [page, setpage] = useState(1);
  const [loading , setLoading]=useState(false)

  const fetchProducts = async ()=>{
    
    setLoading(true)

    try{
      const res = await fetch(`https://dummyjson.com/products?limit=${page* 10}`)
      const data = await res.json();
      setproducts(data)
      setpage((prevPage)=>prevPage + 1);

    }catch(error){
     console.log("error fetching data:" , error);
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  const myThrottle=(cb , d)=>{
    let last= 0;
    return(...args)=>{
      let now= new Date().getTime();
      if(now-last< d) return ;

      last = now;
      return cb(...args);

    };
  };

  const handleScroll= myThrottle(()=>{
    if(window.innerHeight+ document.documentElement.scrollTop+500>document.documentElement.offsetHeight && !loading && products.limit < products.total) {
      fetchProducts();
    }
  },500)

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  } ,[handleScroll])

  const {products:allproducts } = products;
  return (
    <div>
      <h1>Infinite scrolling</h1>
      {allproducts ?.length > 0 && 
      <div className='products'>
        {allproducts ?.map((prod , index)=>{
          return (
            <div className='products__single' key={prod.id}>
              <img  src={prod.thumbnail} alt={prod.title}/>
               <span>{prod.title}</span>
            </div>
          )
        })}
        </div>}

    </div>
  )
}

export default App
