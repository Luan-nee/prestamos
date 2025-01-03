import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

function Countries() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      const { data, error } = await supabase.from("usuario").select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setUsuarios(data);
      }
    } catch (error) {
      console.error("Error in getCountries:", error);
    }
  }

  console.log(usuarios);

  return (
    <ul>
      {usuarios.map((user, index) => (
        <li key={index}>{user.nombre}</li>
      ))}
    </ul>
  );
}

export default Countries;