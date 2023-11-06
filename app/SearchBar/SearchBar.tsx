import { useState } from "react"





const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("")

    const handleInputChanger = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0 

    const filterProducts = props.products.filter((product) => {
        return product.title.includes(searchValue)
    })

    return (
        <div>
            <input type = "Text" value={searchValue}  onChange={handleInputChanger}/>
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            

            <div>
                {filterProducts.map((product) => {
                    return(
                        <div className="product" key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <img src={product.image} alt={product.title} className="product-image" />
                        </div>
                    ) 
                })}
            </div>
            
        </div>)
}

export default SearchBar