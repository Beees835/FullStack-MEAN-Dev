export class Package {
    _id: string = '';                        // MongoDB ObjectId (optional if generated by the backend)
    package_id: string = '';                 // Auto-generated package ID
    package_title: string = '';              // Title of the package
    package_weight: number = 0;              // Weight of the package
    package_description: string = '';        // Description of the package
    package_destination: string = '';        // Destination of the package
    driver_id: string = '';                  // Driver ID (reference to the Driver model)
    isAllocated: boolean = false;            // Whether the package is allocated to a driver
    createdAt: Date = new Date();            // Date the package was created (generated by backend)

    constructor(init?: Partial<Package>) {
        Object.assign(this, init);           // Initialize with optional partial data
    }
}