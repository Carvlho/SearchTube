import React from 'react';

import { Youtube, Instagram, Facebook, Twitter, Link } from './style';

const SocialMedia = props => {

    const bandIndex = 0;
    let band;

    try {
        band = props.data._embedded.attractions[bandIndex];
    }catch (err) {
        band = false;
    }

    const links = [
        {
            socialNetwork: 'facebook', icon: <Facebook />,
        },
        {
            socialNetwork: 'twitter', icon: <Twitter />,
        },
        {
            socialNetwork: 'youtube', icon: <Youtube />,
        },
        {
            socialNetwork: 'instagram', icon: <Instagram />,
        }
    ]

    const linkIcons = links.map((item, index) => {
        return (
            <Link
                href={band && band.externalLinks && band.externalLinks[item.socialNetwork] ? band.externalLinks[item.socialNetwork][bandIndex].url : ''}
                key={`${index}link`}
                target='_blank'
            >
                {item.icon}
            </Link>
        )

    });

    return (
        band && (
            <div>{linkIcons}</div>
        )
    )

}

export default SocialMedia;