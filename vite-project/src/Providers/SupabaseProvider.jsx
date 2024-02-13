import { Children, createContext, useState } from "react"

const SupabaseContext = createContext()

export const SupabaseProvider = ({children}) => {
    const [ supabase, setSupaBase ] = useState(null)

    const supabaseUrl = 'https://fyokeylyrwdwdxhanigr.supabase.co';
    const supebaseKey = '';

  return (
    <SupabaseContext.Provider>
        {children}
    </SupabaseContext.Provider>
  )
}
