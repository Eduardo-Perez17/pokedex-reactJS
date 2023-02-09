import { useState } from 'react';

export const useSharePokemon = (pokemonData) => {
  const [notificationChecked, setNotificationChecked] = useState(false);
  const [notificationError, setNotificationError] = useState(false);

  const handleShare = (e) => {
    e.preventDefault();
    if (!navigator.share) alert('la api del navegador no existe en tu browser');
    else {
      navigator
        .share({
          title: `${pokemonData.title}`,
          text: `Look at this amazing pokemon`,
          url: document.location.href,
        })
        .then(() => setNotificationChecked(true))
        .catch(() => setNotificationError(true));
    }
  };

  setTimeout(() => {
    setNotificationChecked(false);
    setNotificationError(false);
  }, 8000);

  return [handleShare, notificationChecked, notificationError, notificationError];
};
