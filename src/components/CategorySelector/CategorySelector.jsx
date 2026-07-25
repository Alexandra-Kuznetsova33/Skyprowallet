import { CATEGORIES } from '../../constants/categories';
import { Grid, Chip } from './CategorySelector.styled';

export default function CategorySelector({ selected, onSelect }) {
  return (
    <Grid>
      {CATEGORIES.map((cat) => {
        const IconComponent = cat.icon;
        return (
          <Chip
            key={cat.id}
            type="button"
            selected={selected === cat.id}
            onClick={() => onSelect(cat.id)}
          >
            <IconComponent />
            <span>{cat.label}</span>
          </Chip>
        );
      })}
    </Grid>
  );
}
