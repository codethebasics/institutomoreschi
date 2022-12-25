import FormNavigator from '../components/forms/FormNavigator'
import Header from '../components/template/Header'

export default function Home() {
  return (
    <div className="mainWrapper">
      <Header title={'Instituto Moreschi'} />
      <FormNavigator />
    </div>
  )
}
