import Button from "../components/Button";
import FormTest from "../components/Forms/FormTest";
import Layout from "../components/Layout";
import Table from "../components/Table";


export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
        <Button cor="green" className="mb-4">Nova Pessoa</Button>
        </div>
       <FormTest />
      </Layout>
    </div>
  )
}
