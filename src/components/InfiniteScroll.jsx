import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <div className="list-item">
    {item}
  </div>
);

ListItem.propTypes = {
    item: PropTypes.string.isRequired
}

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
  const loaderRef = useRef(null);
  const listRef = useRef(null);

  const loadMoreItems = useCallback(() => {
    setItems(prevItems => [
      ...prevItems,
      ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`)
    ]);
  }, []);

  useEffect(() => {
    const list = listRef.current;

    const handleScroll = () => {
      console.log('Scrolling...');
    };

    if (list) {
      list.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    }, {
      root: listRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreItems]);

  return (
    <div ref={listRef} className="infinite-scrolling-list" style={{ height: '100vh', overflowY: 'auto' }}> 
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
      <div ref={loaderRef} className="loader">Loading...</div>
    </div>
  );
};

export default InfiniteScroll;