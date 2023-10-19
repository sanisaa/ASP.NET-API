using AutoMapper;
using ContactsAPI.Models;

namespace ContactsAPI.AutoMapper
{
    public class AutoMapper: Profile
    {
        public AutoMapper()
        {
            CreateMap<AddContactRequest, Contacts>();

            CreateMap<Contacts, AddContactRequest>();

        }
    }
}
