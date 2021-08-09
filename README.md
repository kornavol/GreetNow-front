# GreetNow

## Description

## packages

- Bootstrap
- react-routing
- redux
- react-inlinesvg (working with SVG)
- react-bootstrap-table (table for Contacts)
- underscore (separately dependency for bootstraptable)

## Components

### Media Catalog

### Contact List

- Bootstrap table as Contact List (desktop version)

## Questions

- EvFilter. Should I receive state like props (current) or better over Redux
- ImgCatalog. How better fetch a pictures
- Code review (remind Buelent)
- In general. Style system (for guys)
- BQ.EvFilter. Why I can't change in current obj (prev) a value and return it. In consideration that state contains a link to the object
- BQ. TextsCatalog: Why I couldn't add some in URL using ternary operator:
  const url = 'http://localhost:8080/media-catalog/getTexts?'+page +"&" + limit + isSpecEvent ? '&Birthday' : null
  How do it better?
