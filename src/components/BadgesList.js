import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import ReactPaginate from 'react-paginate';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (

      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <div className="twitter"><ion-icon name="logo-twitter"></ion-icon>@{this.props.badge.twitter}</div>
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

// Badge List

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {

  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  const [pageNumber, setPageNumber] = useState(0);
  const badgePerPage = 10;
  const pagesVisited = pageNumber * badgePerPage;

  // Obtener datos actuales
  const currentBadge = (!query) ? filteredBadges.slice(pagesVisited, pagesVisited + badgePerPage) : filteredBadges;

  // Cantidad de páginas
  const pageCount = Math.ceil(badges.length / badgePerPage);

  // Cambiar de página
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }} />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }} />
      </div>
      <ul className="list-unstyled">
        {currentBadge.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        previousLabel={'⟨'}
        nextLabel={'⟩'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousClassName={'previousBttns'}
        nextLinkClassName={'nextBttns'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );

}

export default BadgesList;
