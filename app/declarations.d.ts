declare namespace JSX {
    interface IntrinsicElements {
        'gmpx-store-locator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            'library-version'?: string;
            'map-id'?: string;
            'location-set'?: string;
        };
    }
}
