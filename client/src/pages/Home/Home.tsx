import { Categories } from "../../components/Categories/Categories"
import { Contact } from "../../components/Contact/Contact"
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts"
import { Slider } from "../../components/Slider/Slider"

export const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact />
    </div>
  )
}
