import React from "react";
import CategoryTile from "./../CategoryTile";

function MenuSection() {
  return (
    <div>
      <h1>Menu</h1>
      <div>
        {/* Image by Fahmi Fakhrudin: https://unsplash.com/@fahmipaping */}
        <CategoryTile 
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3588&q=80"
          alt="Latte"
          category="Latte"
        />
      </div>

      <div>
        {/* Image by Jocelyn Morales: https://unsplash.com/@molnj */}
        <CategoryTile 
          src="https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3737&q=80"
          alt="Croissant"
          category="Croissant"
        />
      </div>

      <div>
        {/* Image by Joe Smith: https://unsplash.com/@joepix */}
        <CategoryTile 
          src="https://images.unsplash.com/photo-1590671886400-8f8088b97cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3445&q=80"
          alt="Cookie"
          category="Cookie"
        />
      </div>
    </div>
  );
}

export default MenuSection;
