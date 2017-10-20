<?php
namespace CherchAppartBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageFile', FileType::class)
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