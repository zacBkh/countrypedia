import { getAllCountries } from '@/services/fetchers'
import Countries from '@/components/countries'
const HomePage = async () => {
    const allCountries = await getAllCountries()

    return <Countries allCountries={allCountries} />
}

export default HomePage
