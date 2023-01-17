import { SearchBarContainer, Input } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchQueryScheme = z.object({
  query: z.string(),
})

type SearchQuerySchemeType = z.infer<typeof searchQueryScheme>

export function SearchBar() {
  const { handleSubmit, register, reset } = useForm<SearchQuerySchemeType>({
    resolver: zodResolver(searchQueryScheme),
  })

  function handleSearchSubmit(data: SearchQuerySchemeType) {
    console.log(data)
    reset()
  }

  return (
    <SearchBarContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <form onSubmit={handleSubmit(handleSearchSubmit)}>
        <Input
          {...register('query')}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </form>
    </SearchBarContainer>
  )
}
