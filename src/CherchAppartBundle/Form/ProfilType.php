<?php
namespace CherchAppartBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class ProfilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null,  array('label' => 'form.name', 'translation_domain' => 'FOSUserBundle'))
            ->add('lastname', null, array('label' => 'form.lastname', 'translation_domain' => 'FOSUserBundle'))
            ->add('sexe', null, array('label' => 'form.sexe', 'translation_domain' => 'FOSUserBundle'))
            ->add('adress', null, array('label' => 'form.adress', 'translation_domain' => 'FOSUserBundle'))
            ->add('postal_code', null, array('label' => 'form.postal_code', 'translation_domain' => 'FOSUserBundle'))
            ->add('city', null, array('label' => 'form.city', 'translation_domain' => 'FOSUserBundle'))
            ->add('phone_number', null, array('label' => 'form.phone_number', 'translation_domain' => 'FOSUserBundle'));
    }

    public function getParent()
    {
        return 'FOS\UserBundle\Form\Type\ProfileFormType';
    }
}