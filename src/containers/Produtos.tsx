import Produto from '../components/Produto'
import { useGetProdsQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: itens, isLoading } = useGetProdsQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {itens?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
