export type RentalJson = {
	type: string;
	id: string;
	attributes: RentalAttributes;
};

export type Rental = RentalAttributes & {
	type: string;
	id: string;
};

export type RentalAttributes = {
    title: string;
    owner: string;
    city: string;
    location: {
        lat: number;
        lng: number;
    };
    category: string;
    bedrooms: number;
    image: string;
    description: string;
};

export type RentalsJson = {
	data: RentalJson[];
};

export type Rentals = {
    data: Rental[];
};
